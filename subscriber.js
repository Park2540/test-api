import React ,{useContext} from 'react';

const Subscribe = ({sub,unSub,showUnsub}) => {
    const [from] = from.useFrom();
    const qosOption = useContext(QosOption);
}

const record = {
    topic : 'server/mcu*',
    qos: 0,
}

const onFinish = (values) => {
    sub(values);
}

const handleUnsub = () => {
    const values = from.getFieldsValue();
    unSub(values);

}