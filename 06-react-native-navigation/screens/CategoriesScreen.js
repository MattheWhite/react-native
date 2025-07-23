import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(item) {// optional, outsource here for cleaner code
    return;
}

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={} />{/* keyExtractor automatically gets item */}
}

export default CategoriesScreen;
