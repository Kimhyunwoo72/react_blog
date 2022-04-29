import React from "react";

export default function Mypage() {
    return (
        <main id="contents">
            <h2 class="ir_so">컨텐츠 영역</h2>
            <section class="join-type gray">
                <div class="member-form">
                    <h3>회원정보</h3>
                    <div class="join-intro">
                        <div class="modify_img">
                            <div for="youPhoto" class="youFace youFace2">
                                <img src="https://source.unsplash.com/800x600/?nature,water" alt="이미지" />
                            </div>
                        </div>
                        <div class="intro">자기소개: 웹과 코딩에 관심이 많은 현우입니다.</div>
                    </div>
                    <div class="join-info">
                        <ul>
                            <li>
                                <strong>이메일</strong>
                                <span>ekfvoddl0321@gamil.com</span>
                            </li>
                            <li>
                                <strong>닉네임</strong>
                                <span>나무</span>
                            </li>
                            <li>
                                <strong>이름</strong>
                                <span>김현우</span>
                            </li>
                            <li>
                                <strong>생일</strong>
                                <span>1992.01.26</span>
                            </li>
                            <li>
                                <strong>번호</strong>
                                <span>010-8888-1111</span>
                            </li>
                        </ul>
                    </div>
                    <div class="join-btn">
                        <a href="mypageModify.php">수정하기</a>
                        <a href="mypageRemove.php">탈퇴하기</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
