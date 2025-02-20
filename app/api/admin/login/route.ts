import prisma from "@/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    console.log("📌 입력된 이메일 & 비밀번호:", email, password);

    if (!email || !password) {
      return NextResponse.json(
        { error: "이메일과 비밀번호를 입력하세요." },
        { status: 400 }
      );
    }

    // ✅ Prisma에서 관리자 계정 찾기
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    console.log("📌 찾은 관리자:", admin);

    if (!admin) {
      return NextResponse.json(
        { error: "관리자 계정이 아닙니다." },
        { status: 403 }
      );
    }

    // ✅ 비밀번호 검증
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "비밀번호가 올바르지 않습니다." },
        { status: 403 }
      );
    }

    // ✅ JWT 토큰 생성
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: "admin" },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      { message: "로그인 성공", token },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ 로그인 오류:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
