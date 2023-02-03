import React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
} from "@mui/material";

import { useGetProductsQuery } from 'state/api';
import HeaderTitle from 'components/HeaderTitle';

const Products = () => {

    const {data,isLoading} = useGetProductsQuery();
    console.log("data ", data);
    
    return (
        <Box>
            <HeaderTitle title="Products" subtitle="See your list of products" />
       
        </Box>
    );
};

export default Products;