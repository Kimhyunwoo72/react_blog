// rfc
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="/">
                    REACT <em>class</em>
                </a>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/join">JOIN</Link>
                    </li>
                    <li>
                        <Link to="/post">POST</Link>
                    </li>
                    <li>
                        <a href="/">LOGOUT</a>
                        {/* <ul className="sub">
                            <li>
                                <a href="/">문제 만들기</a>
                            </li>
                            <li>
                                <a href="/">문제 풀기</a>
                            </li>
                            <li>
                                <a href="/">기출 문제</a>
                            </li>
                        </ul> */}
                    </li>
                </ul>
            </nav>

            <div className="member">
                <span className="ir_so">회원정보 영역</span>
                <a href="/">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="이미지"
                    />
                    네모님 환영합니다.
                </a>
            </div>
        </header>
    );
}
