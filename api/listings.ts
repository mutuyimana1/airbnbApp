const API_URL = process.env.API_URL;

export interface listingsType {
  id: string;
  data: string;
  location:string,
   description :  string
}
export async function getAllListing() {
  const response = await fetch(`http://localhost:3000/listings`);
  const data = await response.json();

  return data;
}
