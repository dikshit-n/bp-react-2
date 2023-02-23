// import { useTheme, styled } from "@mui/material";
// import { Tab, TabList } from "@fluentui/react-components";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { CustomText } from "src/components";
// import { useUniqueKey } from "src/hooks";
// import { NAVIGATION_LINKS } from "src/routes";
// import { mediaQuery } from "src/theme";
// import { removeSlashAtLast } from "src/utils";

// interface NAVBAR_PROPS {
//   navigationLinks?: NAVIGATION_LINKS;
// }

// const StyledNavbarWrapper = styled("div")`
//   display: none;
//   ${mediaQuery.up(1092)} {
//     display: block;
//   }
// `;

// const StyledTab = styled(Tab)(({ theme }) => `
//   padding: 0 !important;
//   &::after {
//     background-color: ${theme.colors.primary};
//   }
//   > span > a > * {
//     padding: 12px 10px;
//   }
// `);

// export const Navbar: React.FC<NAVBAR_PROPS> = ({ navigationLinks = [] }) => {
//   const keys = useUniqueKey(navigationLinks);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const [updatedPathname, setUpdatedPathname] = useState(pathname);

//   useEffect(() => {
//     setUpdatedPathname(pathname);
//   }, [pathname]);

//   return (
//     <StyledNavbarWrapper>
//       <TabList
//         color={theme.colors.primary}
//         selectedValue={removeSlashAtLast(updatedPathname)}
//       >
//         {navigationLinks.map((el, index) => (
//           <StyledTab key={keys[index]} value={el.path}>
//             {
//               // TODO: complete children implementation
//               // el.children ?
//               //   <CustomDropdown
//               //     appearance="transparent"
//               //     placeholder={el.name}
//               //     style={{border: 'none'}}
//               //     isNav
//               //     selectedOptions={[removeSlashAtLast(updatedPathname)]}
//               //     options={el.children.map((el) => ({
//               //       value: el.path,
//               //       label: el.name,
//               //     }))}
//               //     onChange={({ target: { value } }) => navigate(getValidRouteName(value))}
//               //   />
//               //   :
//                 <CustomText href={el.path} variant="h5" style={{ fontWeight: "bold" }}>
//                     {el.name}
//                   </CustomText>
//             }
//           </StyledTab>
//         ))}
//       </TabList>
//     </StyledNavbarWrapper>
//   );
// };

export {};
