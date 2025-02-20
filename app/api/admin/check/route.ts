import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");

    console.log("📌 Authorization 헤더:", authHeader);

    if (!authHeader) {
      return NextResponse.json(
        { error: "인증 정보가 없습니다." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your_secret_key"
    );

    if (!decoded || decoded.role !== "admin") {
      return NextResponse.json(
        { error: "관리자가 아닙니다." },
        { status: 403 }
      );
    }

    return NextResponse.json({ message: "인증 성공" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "유효하지 않은 토큰입니다." },
      { status: 403 }
    );
  }
}
