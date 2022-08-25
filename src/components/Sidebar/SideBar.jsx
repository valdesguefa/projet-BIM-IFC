
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser, FaSolidFaFileBinary, FaRegFileCode } from "react-icons/fa";
//import { MdMessage } from "react-icons/md";
//import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiFillSave, AiTwotoneFileExclamation } from "react-icons/ai";
//import { BsCartCheck } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
//<FontAwesomeIcon icon="fa-solid fa-file-arrow-up" />


import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";


const routes = [
  {
    path: "/info",
    name: "Informations Projet",
    icon: <FaHome size={22} />,
  },
  {
    path: "/settings",
    name: "Parametres generaux",
    icon: <BiCog size={22} />,
  },
  /*
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  */
  {
    path: "/ccv",
    name: "Cout De Cycle De Vie",
    icon: <AiTwotoneFileExclamation size={22} />,
    subRoutes: [
      {
        path: "/ccv/simple",
        name: "Simple ",
        icon: <FaUser size={22} />,
      },
      {
        path: "/ccv/developpe/Construction",
        name: "Developpe",
        icon: <FaLock size={22} />,
      }
    ],
  },
  {
    path: "/results",
    name: "Resultats",
    icon: <AiFillSave size={22} />,
  },
  {
    path: "/ccv/developpe/ifcConfig",
    name: "IFC upload",
    icon: <FaRegFileCode size={22} />,
  },
];
//faSolidfaFileArrowUp
const SideBar = ({ children, ...props }) => {

  let navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(true);
  const [disableZindex, setdisableZindex] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    //  props.setsideBar(!isOpen);
  }
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };


  const navItems = ['Construction', 'Utilisation', 'maintenance_remplacement', 'Démentellement', 'Externalité'];

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <React.Fragment >
      {
        props.showAppBar ?
          <AppBar style={{
            //  zIndex: '2',//disableZindex ? '' : '2',
            //  width: isOpen ? '83%' : '97%',
            width: '100%',
            transition: {
              duration: 0.9,
              type: "spring",
              damping: 7,
            }, backgroundColor: 'rgb(0, 7, 61)'
          }}

          >
            <Toolbar>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                {
                  props.showAppBar && <div className="top_section">
                    <AnimatePresence>
                      {isOpen && (
                        <motion.h1
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="logo"
                          style={{ marginLeft: '10px', display: 'inline', paddingTop: '20px' }}
                        >
                          <span style={{ marginLeft: '45px' }}>CCV</span><FaBars style={{ marginLeft: '45px' }} onClick={toggle} />

                        </motion.h1>
                      )}
                    </AnimatePresence>
                    {!isOpen ?
                      <div style={{ marginLeft: '-20px' }}>
                        <FaBars onClick={toggle} />
                      </div> : null

                    }

                  </div>
                }
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }} onClick={() => { console.log('sadcasddasdad'); setdisableZindex(true); navigate(`/ccv/developpe/${item}`.replace('é', 'e'), { replace: true }); setdisableZindex(false); }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          : null
      }

      <div className="main-container" style={{ position: 'relative', zIndex: '3' }}>
        <motion.div
          animate={{
            width: props.disableSidebar ? '0px': isOpen ? "240px" : "45px",

            transition:  {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
     
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  style={{ textAlign: 'center' }}
                >
                  CCV
                </motion.h1>
              )}
            </AnimatePresence>
            {
              !props.showAppBar ? <div className="bars">
                <FaBars onClick={toggle} />
              </div> : null
            }
          </div>
          {/*
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
              */}
          <section className="routes" style={{ marginTop: props.showAppBar ? '60px' : null }}>
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <Link
                  to={route.path}
                  key={route.name}
                  className="link"
                  activeClassName="active"

                >
                  <div className="icon" >{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </section>
        </motion.div>

        <main style={{ backgroundImage: "url('../shared/pngegg.png')", backgroundRepeat: 'no-repeat',backgroundSize:'50% 50%',backgroundPosition: 'top left' }}>{children}
        <div>
          
        </div>
          </main>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
