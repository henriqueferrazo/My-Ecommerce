import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.css"

const CartContainer = ({ produtosAPI }) => {

    return (
        <>
            {
                produtosAPI.map((produto, index) => {
                    return (
                        <Card className ="cart" key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={produto.imagem} />
                            <Card.Body>
                                <Card.Title>{produto.nome}</Card.Title>
                                <Card.Text>{produto.descricao}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>${produto.preco}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Add Carrinho</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>

    )
}

export default CartContainer;