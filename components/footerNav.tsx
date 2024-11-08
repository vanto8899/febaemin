// /components/footerNav.tsx
import Image from "next/image";

export default function FooterNav() {
  return (
    <div
      className="w-full mt-4 p-4 bg-white flex flex-row items-center justify-between"
      style={{ gap: "10rem" }}
    >
      <div
        className="flex flex-col items-start"
        style={{ marginLeft: "180px" }}
      >
        <div className="title" style={{ fontWeight: "bold", fontSize: "25px" }}>
          <span>Công ty</span>
        </div>
        <div className="content flex flex-col items-start mt-5 text-blue-500">
          <span>Giới thiệu</span>
          <span>Trung tâm trợ giúp</span>
          <span>Quy chế</span>
          <span>Điều khoản sử dụng</span>
          <span>Bảo mật thông tin</span>
          <span>Giải quyết khiếu nại</span>
          <span>Liên hệ</span>
          <span>Hợp tác nhân viên giao nhận</span>
          <span>Đăng kí quán</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="title" style={{ fontWeight: "bold", fontSize: "25px" }}>
          <span>Ứng dụng Baemin</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.apple.com/app-store/" className="cursor-pointer">
            <Image
              src="/images/appstore.png"
              alt="appstore"
              width={170}
              height={200}
            />
          </a>
          <a
            href="https://play.google.com/store/games"
            className="mt-2 cursor-pointer"
          >
            <Image
              src="/images/ggplay.png"
              alt="ggplay"
              width={150}
              height={200}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end" style={{ marginRight: "180px" }}>
        <div className="title" style={{ fontWeight: "bold", fontSize: "25px" }}>
          <span>Địa chỉ công ty</span>
        </div>
        <div className="content flex flex-col items-end mt-5 text-beamin">
          <span>Công ty cổ phần</span>
          <span>Địa chỉ </span>
          <span>Chịu trách nhiệm quản lý nội dung : Someone</span>
          <span>Điện thoại liên hệ : 0123456778</span>
          <span>Email : baemin@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
