"use server";

import { neon } from "@neondatabase/serverless";
import nodemailer from "nodemailer";

export async function submitContactForm(data: { name: string; email: string; purpose: string; message: string }) {
  try {
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not set.");
      return { success: false, message: "Database connection is not configured." };
    }

    const sql = neon(process.env.DATABASE_URL);
    
    // Ensure the table exists automatically
    await sql`
      CREATE TABLE IF NOT EXISTS queries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        purpose TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert the query into the database
    await sql`
      INSERT INTO queries (name, email, purpose, message)
      VALUES (${data.name}, ${data.email}, ${data.purpose}, ${data.message})
    `;

    // Try sending email notification
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: "tarunsinghchaudharyy@gmail.com",
          subject: `Portfolio Query: ${data.purpose} - ${data.name}`,
          text: `You have a new query from your portfolio.\n\nName: ${data.name}\nEmail: ${data.email}\nPurpose: ${data.purpose}\n\nMessage:\n${data.message}`,
        });
      } else {
        console.log("Email notification skipped: EMAIL_USER or EMAIL_PASS not configured.");
      }
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
    }

    return { success: true, message: "Query correctly submitted." };
  } catch (error) {
    console.error("Failed to submit contact query:", error);
    return { success: false, message: "Failed to securely save your message. Please try again later." };
  }
}
