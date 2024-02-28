import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {PLANET_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = 'zh 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '编程导航',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'planet ',
          title: '知识星球',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> zh github</>,
          href: 'https://github.com/',
          blankTarget: true,
        },

      ]}
    />
  );
};
export default Footer;
