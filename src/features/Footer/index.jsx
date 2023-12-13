import clsx from "clsx";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

import Award from "@features/Footer/components/Award";
import ContactInfo from "@features/Footer/components/ContactInfo";
import RecentTrips from "@features/Footer/components/RecentTrips";
import MenuFooterList from "@features/Footer/components/MenuFooterList";
import BorderLine from "@components/BorderLine";

import VietNamImage from "@assets/images/vietnam.jpg";
import TokyoImage from "@assets/images/tokyo.jpg";
import ParisImage from "@assets/images/paris.jpg";
import USAImage from "@assets/images/usa.jpg";
import GermanyImage from "@assets/images/germany.jpg";
import AwardImage from "@assets/images/awards.png";

import { useStyles } from "@styles/custom";
import theme from "@styles/theme";

const FooterFeature = () => {
  const classes = useStyles();

  const contactList = [
    { id: 1, icon: <PhoneAndroidOutlinedIcon />, text: "1-567-124-44227" },
    {
      id: 2,
      icon: <LocationOnOutlinedIcon />,
      text: "184 Main Street East Perl Habour 8007",
    },
    {
      id: 3,
      icon: <AccessAlarmOutlinedIcon />,
      text: "Mon - Sat 8.00 - 18.00 Sunday CLOSED",
    },
  ];

  const socialList = [
    { id: 1, icon: <FacebookIcon />, title: "facebook" },
    { id: 2, icon: <TwitterIcon />, title: "twitter" },
    { id: 3, icon: <YouTubeIcon />, title: "youtube" },
    { id: 4, icon: <PinterestIcon />, title: "pinterest" },
    { id: 5, icon: <InstagramIcon />, title: "instagram" },
  ];

  const recentTripsList = [
    { id: 1, src: VietNamImage, title: "Vietnam" },
    { id: 2, src: TokyoImage, title: "Tokyo" },
    { id: 3, src: ParisImage, title: "Paris" },
    { id: 4, src: USAImage, title: "USA" },
    { id: 5, src: GermanyImage, title: "Germany" },
    { id: 6, src: VietNamImage, title: "Vietnam," },
  ];

  const award = {
    src: AwardImage,
  };

  const menuList = [
    { id: 1, label: "Home" },
    { id: 2, label: "Tours" },
    { id: 3, label: "Blog" },
    { id: 4, label: "Purchase Themes" },
  ];

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        marginTop: "80px",
        backgroundColor: theme.palette.backgrounds.secondary,
      }}
    >
      <Stack
        component="div"
        className={clsx(classes.container)}
        sx={{
          height: "auto",
          columnGap: "30px",
          rowGap: "20px",
          justifyContent: "space-between",
          alignItems: "start",
          padding: "60px 0px",
          flexDirection: {
            sMobile: "column",
            tablet: "row",
          },
        }}
      >
        <Award award={award} />
        <ContactInfo contactList={contactList} socialList={socialList} />
        <RecentTrips recentTripsList={recentTripsList} />
      </Stack>
      <BorderLine />
      <Box component="div" sx={{ padding: "30px 0px" }}>
        <Stack
          component="div"
          className={clsx(classes.container)}
          sx={{
            rowGap: "15px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              sMobile: "column-reverse",
              tablet: "row",
            },
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: theme.typography.fontSizes.tiny,
                fontWeight: theme.typography.fontWeights.regular,
                color: theme.palette.texts.small,
              }}
            >
              © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
            </Typography>
          </Box>
          <Stack
            component="div"
            sx={{
              width: "100%",
              flexDirection: "row",
              justifyContent: {
                sMobile: "start",
                tablet: "end",
              },
            }}
          >
            <MenuFooterList menuList={menuList} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterFeature;
