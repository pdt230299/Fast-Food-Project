/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardDetailComponent from '../components/Menu/CardDetailComponent';
import productApi from '../../api/productApi';
import commentApi from '../../api/commentApi';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';

export const CommentContext = React.createContext();

function CardDetail() {
    const { slug } = useParams();

    const [product, setProduct] = useState({});
    const [comment, setComment] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const responseProduct = await productApi.get(slug);
                const responseComment = await commentApi.getAll({ productId: slug });
                setProduct(responseProduct);
                if (filter.stars) {
                    const newResponseComment = responseComment.filter((element) => element.stars == filter.stars);
                    setComment(newResponseComment);
                } else {
                    setComment(responseComment);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductList();
    }, [slug, filter]);

    return (
        <div>
            <Header />
            <CommentContext.Provider value={{ commentContext: [comment, setComment], filterContext: [filter, setFilter] }}>
                <CardDetailComponent valueProduct={product} valueComment={comment} />
            </CommentContext.Provider>
            <Footer />
        </div>
    );
}

export default CardDetail;
