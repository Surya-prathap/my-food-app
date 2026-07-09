import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_yfyzu3g",
    "template_ninyxwn",
    order,
    "9Qy99XiZoO7Ux5vd-",
  );
};