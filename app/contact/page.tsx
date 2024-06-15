import { ISocial } from "@/@types";
import ContactItem from "@/components/contact-item";
import Title from "@/components/title";
import {
  RiFacebookLine,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiQuillPenLine,
  RiTwitterXLine,
} from "react-icons/ri";

const ContactList: ISocial[] = [
  {
    title: "Github",
    link: "https://github.com/hongducdev",
    icon: <RiGithubFill />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/hongducdev/",
    icon: <RiLinkedinBoxLine />,
  },
  {
    title: "X",
    link: "https://x.com/hongducdev",
    icon: <RiTwitterXLine />,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/hongducdev",
    icon: <RiFacebookLine />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/pinkduwc._",
    icon: <RiInstagramLine />,
  },
  {
    title: "Blog",
    link: "https://blog.hongducdev.com",
    icon: <RiQuillPenLine />,
  },
];

const ContactPage = () => {
  return (
    <div>
      <Title>Contact</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {ContactList.map((social) => (
          <ContactItem key={social.title} social={social} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
