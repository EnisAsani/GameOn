import { Row, Col } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store () {
    return <>
    <h1 style={{paddingTop: "10px", color:"white", padding:"10px 0 0 20px"}}>Store</h1>
    <Row md={2} xs={1} lg={4} className="g-2" style={{margin: "0"}}>
        {storeItems.map(item => (
            <Col key={item.id}><StoreItem {...item}/></Col>
        ))}
        
    </Row>
    </>
}