import React from 'react'
import { Typography } from "antd";
const Footer = () => {
  return (
    <div className="AppFooter">
    <Typography.Link href="tel:+123456789">+91-799012154</Typography.Link>
    <Typography.Link href="https://www.google.com" target={"_blank"}>
      Privacy Policy
    </Typography.Link>
    <Typography.Link href="https://www.google.com" target={"_blank"}>
      Terms of Use
    </Typography.Link>
  </div>
  )
}

export default Footer
