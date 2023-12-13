import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Social from "@features/Footer/components/Social";
import theme from "@styles/theme";

const ContactInfo = (props) => {
  const { contactList, socialList } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        component="h2"
        sx={{
          fontSize: theme.typography.fontSizes.xxLarge,
          fontWeight: theme.typography.fontWeights.bold,
          color: theme.palette.texts.primary,
        }}
      >
        Contact Info
      </Typography>

      <Stack component="div" rowGap="10px" marginTop="10px">
        {contactList.map((contact) => (
          <Stack
            key={contact.id}
            sx={{
              flexDirection: "row",
              alignItems: "start",
              gap: "5px",
            }}
          >
            <Typography
              component="span"
              sx={{
                " svg": {
                  marginTop: "5px",
                  fontSize: theme.typography.fontSizes.medium,
                  color: theme.palette.texts.small,
                },
              }}
            >
              {contact.icon}
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: theme.typography.fontSizes.xRegular,
                lineHeight: theme.typography.lineHeights.xLarge,
                color: theme.palette.texts.small,
              }}
            >
              {contact.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack
        component="ul"
        sx={{
          marginTop: "20px",
          textAlign: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: "10px",
          columnGap: "10px",
          alignItems: "center",
          justifyContent: {
            sMobile: "center",
            tablet: "start",
          },
        }}
      >
        {socialList.map((social) => (
          <Stack key={social.id} component="li">
            <Social social={social} />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

ContactInfo.propTypes = {
  contactList: PropTypes.array.isRequired,
  socialList: PropTypes.array.isRequired,
};

export default ContactInfo;
