export const newNameCategory = (sex: string, type: string): string => {
    const types = ['Ботинки', 'Джинсы', 'Пальто', 'Шорты', 'Штаны'];
    let newSex = newNameSex(sex, type);
    let newtype = type;

    const findedType = types.find((item) => {
        return item == newtype;
    });

    if (!findedType) {
        newtype = type.slice(0, -1) + 'а';
    }

    let result = newtype;

    if (newSex !== '') {
        result = `${newSex} ${newtype.toLocaleLowerCase()}`;
    }

    return result;
};

export const newNameSex = (sex: string, category: string): string => {
    const type = ['Ботинки', 'Джинсы', 'Шорты', 'Штаны'];
    let result = '';

    if (category === 'Пальто') {
        switch (sex) {
            case 'male':
                return (result = 'Мужское');

            case 'female':
                return (result = 'Женское');

            case 'any':
                return result;
        }
    } else {
        const find = type.find((item) => {
            return item == category;
        });

        switch (sex) {
            case 'male':
                if (!find) {
                    return (result = 'Мужская');
                } else {
                    result = 'Мужские';
                }

            case 'female':
                if (!find) {
                    return (result = 'Женская');
                } else {
                    result = 'Женские';
                }

            case 'any':
                return result;
        }
    }
    return result;
};