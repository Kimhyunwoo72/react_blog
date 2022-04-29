import React from "react";
import "./write.css";

export default function write() {
    return (
        <main id="contents">
            <h2 class="ir_so">컨텐츠 영역</h2>
            <section id="board-type" class="section center mb100">
                <div class="container">
                    <h3 class="section__title">블로그 작성하기</h3>
                    <p class="section__desc">자유롭게 소통할 수 있는 게시판입니다. 자유롭게 작성해 주세요!</p>
                    <div class="blog__inner">
                        <div class="blog__write">
                            <form
                                action="blogWriteSave.php"
                                name="blogWrite"
                                method="post"
                                enctype="multipart/form-data"
                            >
                                <fieldset>
                                    <legend class="ir_so">블로그 게시글 작성 영역</legend>
                                    <div>
                                        <label for="blogCate">카테고리</label>
                                        <select name="blogCate" id="blogCate">
                                            <option value="javascript">javascript</option>
                                            <option value="jquery">jquery</option>
                                            <option value="html">html</option>
                                            <option value="css">css</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="blogTitle">제목</label>
                                        <input
                                            type="text"
                                            name="blogTitle"
                                            id="blogTitle"
                                            placeholder="제목을 넣어주세요"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label for="blogContents">내용</label>
                                        <textarea
                                            name="blogContents"
                                            id="blogContents"
                                            placeholder="내용을 넣어주세요."
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label for="blogImgFile">파일</label>
                                        <input
                                            type="file"
                                            name="blogImgFile"
                                            id="blogImgFile"
                                            accept=".jpg, .jpeg, .png, .gif"
                                            placeholder="사진을 넣어주세요. 사진은 jpg, png, gif 파일만 지원 됩니다."
                                        />
                                    </div>
                                    <button type="submit" value="저장하기">
                                        저장하기
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
