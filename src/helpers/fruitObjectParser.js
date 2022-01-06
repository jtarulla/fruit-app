const isFruit = object => typeof object === 'object' 
    && (object['isFruit'] ?? false) 
    && Object.prototype.hasOwnProperty.call(object, 'id');

const fruitObjectParser = (data) => {
    const fruits = [];

    if (isFruit(data)) {
        fruits.push(data);
    }

    for (const k in data) {
        if (typeof data[k] === 'object') {
            fruits.push(...fruitObjectParser(data[k]));
        }
    }

    fruits.sort((a, b) => (a.id - b.id));

    return fruits;
}

export default fruitObjectParser;