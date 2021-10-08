import React from 'react';

import { makeStyles, List, Typography } from '@material-ui/core';

import NavItem from './../NavItem';
import NavCollapse from './../NavCollapse';

const useStyles = makeStyles((theme) => ({
    menuCaption: {
        ...theme.typography.menuCaption,
    },
    subMenuCaption: {
        ...theme.typography.subMenuCaption,
    },
}));

const NavGroup = (props) => {
    const { item } = props;
    const classes = useStyles();

    const items = item.children.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <List
            // subheader={
            //     <Typography variant="caption" className={classes.subMenuCaption}  gutterBottom>
            //                 {/* {item.caption} */}
            //             </Typography>
            // }
        >
            {items}
        </List>
    );
};

export default NavGroup;