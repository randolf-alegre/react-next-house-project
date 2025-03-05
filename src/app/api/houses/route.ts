import { LOCAL_API_SERVER } from "@/app/utils";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(LOCAL_API_SERVER, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const houses = await res.json()
  return NextResponse.json(houses);
}

export async function POST(request: Request) {
    const payload = await request.json();
    const res = await fetch(LOCAL_API_SERVER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      const house = await res.json()
  return NextResponse.json(house);
}

export async function DELETE(request: Request) {
  const payload = await request.json();
  const { id } = payload;
  const res = await fetch(`${LOCAL_API_SERVER}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const houses = await res.json()
return NextResponse.json(houses);
}

export async function PUT(request: Request) {
  const payload = await request.json();
  const { id } = payload;
  debugger;
  const res = await fetch(`${LOCAL_API_SERVER}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    const house = await res.json()
return NextResponse.json(house);
}