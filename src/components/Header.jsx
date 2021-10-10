import React, {useState} from 'react';
import logo from '../news-logo.png';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Dehaze from '@mui/icons-material/Dehaze';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CategoryLists } from './Constant';
import { Link } from 'react-router-dom';

const Header = () => {
    const [opens, setOpens] = useState();
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img src={logo} alt="News Logo" />
                </Link>

                <Drawer open={opens} className="drawer-setup" onClose={() => setOpens(false)}>
                    <h3 className="category-title">Categories</h3>
                    <List className="category-list">
                        {CategoryLists.map((category, index) => (
                            <Link to={`/read/${category}`} key={index} onClick={() => setOpens(false)} >
                                <ListItem>{category}</ListItem>
                            </Link>
                        ))}
                    </List>
                    
                </Drawer>

                <div className="menu">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setOpens(true)}
                    >
                        <Dehaze />
                    </IconButton>
                </div>

            </div>
        </>
    );
};

export default Header;