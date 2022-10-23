const { ListItem, Card } = require("@rneui/base")

const Receiver = ({ payload }) => {
    const [message,SetMessages] = 

    useEffect (() => {
        if (payload.topic) {
            SetMessages(message => [...message,payload])
        }
    }, [payload])

    const renderListItem = (item) => (
        <List.Item>
            <List.Item.Meta
                title={item.topic}
                description={item.message}

            />
        </List.Item>
    )

    return (
        <Card
            title="Receiver"
        >
        <List
            size="small"
            borderred
            dataSource={message}
            renderItem ={renderListItem}
        />
        </Card>
    );
} 

export default Receiver;