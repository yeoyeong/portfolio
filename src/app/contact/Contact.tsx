import React from "react";
import useInput from "src/hooks/useInput";
import { SendTamplateType } from "src/model/contact";
import AppLayout from "src/ui/common/layout/AppLayout";

const Contact = () => {
  const emailjs = require("emailjs-com");
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  const fromName = useInput("");
  const title = useInput("");
  const email = useInput("");
  const subStance = useInput("");
  //메일 발송
  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    // if (!e.target) return;
    e.preventDefault();
    // if (input.name === "") return alert("이름을 입력해 주세요.");
    // if (
    //   input.number.length !== 3 ||
    //   input.number_front.length !== 4 ||
    //   input.number_back.length !== 4
    // )
    //   return alert("전화번호를 확인해 주세요.");
    // if (input.email === "") return alert("이메일을 입력해 주세요.");
    // if (input.substance === "") return alert("문의내용을 입력해 주세요.");
    // const formElement = e.target as typeof e.target & {
    //   contactCheckBox: { checked: boolean };
    // };
    // if (!formElement.contactCheckBox.checked)
    //   return alert("개인정보 수집이용 동의하셔야 합니다.");
    // const number = [input.number, input.number_front, input.number_back].join(
    //   "-"
    // );
    const template: SendTamplateType = {
      title: title.value,
      email: email.value,
      sub_stance: subStance.value,
      from_name: fromName.value,
    };
    //             //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
    emailjs.send("service_6kogbad", "template_q5iys2k", template).then(
      (result: any) => {
        title.setValue("");
        email.setValue("");
        subStance.setValue("");
        console.log("SUCCESS!", result.status, result.text);
        alert("문의가 완료되었습니다.");
      },
      (error: Error) => {
        alert("메일 발송이 실패하였습니다.");
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <AppLayout>
      <form onSubmit={sendMail}>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title.value}
          onChange={title.onChange}
        />
        <input
          type="text"
          placeholder="이름/회사명을 입력해주세요"
          value={fromName.value}
          onChange={fromName.onChange}
        />
        <input
          type="email"
          placeholder="메일을 입력해주세요"
          value={email.value}
          onChange={email.onChange}
        />
        <textarea
          id="substance"
          placeholder="문의내용을 입력하세요"
          value={subStance.value}
          onChange={subStance.onChange}
        ></textarea>
        <button>발송</button>
      </form>
    </AppLayout>
  );
};

export default Contact;
