import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const ExpandableDropdown = ({ category }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={category.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {category.subcategories && category.subcategories.map((subcategory, index) => (
            <ExpandableDropdown key={index} category={subcategory} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default ExpandableDropdown;
