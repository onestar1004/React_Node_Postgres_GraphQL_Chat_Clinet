import { createTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#cbf3f0" : "#2ec4b6",
      },
      secondary: {
        main: darkMode ? "#cbf3f0" : "#2ec4b6",
      },
    },
    overrides: {
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          fontSize: "0.95em",
        },
      },
      MuiTypography: {
        root: {
          wordWrap: "anywhere",
        },
      },
      MuiListItem: {
        root: {
          "&$selected": {
            borderRight: "5px solid #cbf3f0",
          },
        },
      },
      MuiAvatar: {
        colorDefault: {
          backgroundColor: "#d3d3d3",
          color: "#2ec4b6",
        },
      },
      MuiSelect: {
        select: {
          "&:focus": {
            display: "flex",
            alignItems: "center",
          },
        },
        selectMenu: {
          display: "flex",
          alignItems: "center",
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
