import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import InputCustom from "@components/InputCustom";
import SelectCustom from "@components/SelectCustom";
import theme from "@styles/theme";

const Search = ({ searchData }) => {
  const {
    searchCity,
    searchMoney,
    selectMonth,
    selectSort,
    selectCategory,
    selectDestination,
  } = searchData;

  const [show, setShow] = useState(false);

  const onHandleClickShow = () => {
    setShow(!show);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ marginTop: "20px" }}
    >
      <Box
        component="div"
        sx={{
          display: "grid",
          gap: "15px",
          marginBottom: "15px",
          gridTemplateColumns: {
            sMobile: "repeat(1, 1fr)",
            tablet: "repeat(4, 1fr)",
          },
        }}
      >
        <InputCustom input={searchCity} />
        <SelectCustom select={selectMonth} />
        <SelectCustom select={selectSort} />
        <Button
          component="button"
          sx={{
            width: "100%",
            padding: "5px 0",
            textTransform: "capitalize",
            fontSize: theme.typography.fontSizes.xRegular,
            color: theme.palette.texts.primary,
            backgroundColor: theme.palette.backgrounds.buttonPrimary,
            "&:hover": {
              backgroundColor: theme.palette.backgrounds.buttonSecondary,
            },
          }}
        >
          Search
        </Button>
        {show && (
          <>
            <SelectCustom select={selectCategory} />
            <SelectCustom select={selectDestination} />
            <InputCustom input={searchMoney} />
          </>
        )}
      </Box>
      <Box component="div">
        <Stack
          component="a"
          onClick={onHandleClickShow}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
            color: theme.palette.texts.primary,
            fontSize: theme.typography.fontSizes.regular,
            " svg": {
              marginLeft: "-5px",
              marginTop: "-2px",
              color: "inherit",
              fontSize: theme.typography.fontSizes.heading,
            },
          }}
        >
          <Stack
            component="span"
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Stack>
          Advanced Search
        </Stack>
      </Box>
    </Box>
  );
};

Search.propTypes = {
  searchData: PropTypes.shape({
    searchCity: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    }).isRequired,
    searchMoney: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    }).isRequired,
    selectMonth: PropTypes.shape({
      optionList: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      icon: PropTypes.node.isRequired,
    }).isRequired,
    selectSort: PropTypes.shape({
      optionList: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      icon: PropTypes.node.isRequired,
    }).isRequired,
    selectCategory: PropTypes.shape({
      optionList: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      icon: PropTypes.node.isRequired,
    }).isRequired,
    selectDestination: PropTypes.shape({
      optionList: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      icon: PropTypes.node.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Search;
