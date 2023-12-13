import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import MenuFooter from "@features/Footer/components/MenuFooter";

const MenuFooterList = ({ menuList }) => {
  return (
    <Box component="div">
      <Stack
        component="ul"
        sx={{
          flexDirection: "row",
          columnGap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {menuList.map((menu) => (
          <Box component="li" key={menu.id}>
            <MenuFooter menu={menu} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

MenuFooterList.propTypes = {
  menuList: PropTypes.array.isRequired,
};

export default MenuFooterList;
