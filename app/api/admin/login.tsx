import type { NextApiRequest, NextApiResponse } from "next";

interface LoginResponse {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method === "POST") {
    const { username, password } = req.body as {
      username: string;
      password: string;
    };

    // 예시: 하드코딩된 관리자 계정 (실제 운영 시에는 데이터베이스와 암호화를 사용)
    if (username === "admin" && password === "password123") {
      // 간단한 쿠키 설정 (더 안전한 방법으로는 세션이나 JWT 사용 권장)
      res.setHeader("Set-Cookie", "admin=true; Path=/; HttpOnly; Max-Age=3600");
      res.status(200).json({ message: "로그인 성공" });
    } else {
      res
        .status(401)
        .json({ message: "아이디 혹은 비밀번호가 올바르지 않습니다." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
