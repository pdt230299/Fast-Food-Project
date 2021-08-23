import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import CardDetailComponent from '../components/Menu/CardDetailComponent';
import productApi from '../../api/productApi';
import commentApi from '../../api/commentApi';

function CardDetail() {
    const { slug } = useParams();

    const [product, setProduct] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const responseProduct = await productApi.get(slug);
                const responseComment = await commentApi.getAll({ productId: slug });
                setProduct(responseProduct);
                setComment(responseComment);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductList();
    }, [slug]);

    return (
        <div>
            <Header />
            <CardDetailComponent value={product} valueComment={comment} />
            <Footer />
        </div>
    );
}

export default CardDetail;
