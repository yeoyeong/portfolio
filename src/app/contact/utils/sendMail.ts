import { SendTamplateType } from "src/model/contact";

//메일 발송
const emailjs = require("emailjs-com");
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export const sendMail = (
  e: React.FormEvent<HTMLFormElement>,
  formData: SendTamplateType,
  valueReset: () => void
) => {
  e.preventDefault();
  if (
    !formData.email ||
    !formData.from_name ||
    !formData.sub_stance ||
    !formData.title
  ) {
    throw "빈칸을 입력해주세요";
  }

  const template: SendTamplateType = {
    title: formData.title,
    email: formData.email,
    sub_stance: formData.sub_stance,
    from_name: formData.from_name,
  };
  //             //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)

  emailjs.send("service_6kogbad", "template_q5iys2k", template).then(
    (result: any) => {
      console.log("SUCCESS!", result.status, result.text);
      alert("문의가 완료되었습니다.");
      valueReset();
    },
    (error: Error) => {
      throw error;
    }
  );
};
