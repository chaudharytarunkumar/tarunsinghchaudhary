"use server";

import { neon } from "@neondatabase/serverless";

// Verify the admin password
export async function verifyAdminPassword(password: string) {
  const masterPassword = process.env.ADMIN_PASSWORD;

  if (!masterPassword) {
    console.error("ADMIN_PASSWORD is not set in environment variables.");
    return false; // Fail safe if not configured
  }

  return password === masterPassword;
}

// Fetch all queries securely
export async function fetchQueries(password: string) {
  // Double-check the password on the server side to prevent unauthorized API calls
  const isAuthorized = await verifyAdminPassword(password);
  
  if (!isAuthorized) {
    throw new Error("Unauthorized");
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    
    // We fetch everything sorted by newest first
    const data = await sql`
      SELECT id, name, email, purpose, message, created_at 
      FROM queries 
      ORDER BY created_at DESC
    `;
    
    return data;
  } catch (error) {
    console.error("Error fetching queries: ", error);
    // If the table doesn't exist yet, return empty array instead of crashing natively
    return [];
  }
}

// Delete a query securely
export async function deleteQuery(id: number, password: string) {
  const isAuthorized = await verifyAdminPassword(password);
  
  if (!isAuthorized) {
    throw new Error("Unauthorized");
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    
    await sql`
      DELETE FROM queries 
      WHERE id = ${id}
    `;
    
    return { success: true };
  } catch (error) {
    console.error("Error deleting query: ", error);
    return { success: false, message: "Failed to delete from database" };
  }
}

