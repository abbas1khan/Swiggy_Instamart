import {
    createContext,
    FC,
    ReactNode,
    RefObject,
    useContext,
    useRef,
} from 'react';
import { FlatList } from 'react-native';
import Animated, {
    SharedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

interface SharedStateContextType {
    scrollY: SharedValue<number>;
    scrollYGlobal: SharedValue<number>;
    scrollToTop: () => void;
    flatlistRef: RefObject<FlatList<any>>;
}
const SharedStateContext = createContext<SharedStateContextType | undefined>(
    undefined,
);

export const SharedStateProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const scrollY = useSharedValue(0);
    const scrollYGlobal = useSharedValue(0);
    const scrollToTop = () => {
        scrollY.value = withTiming(0, { duration: 300 });
        scrollYGlobal.value = withTiming(0, { duration: 300 });
    };
    const flatlistRef = useRef<any>(null);
    return (
        <SharedStateContext.Provider
            value={{ scrollToTop, scrollY, scrollYGlobal, flatlistRef }}
        >
            {children}
        </SharedStateContext.Provider>
    );
};

export const useSharedState = () => {
    const context = useContext(SharedStateContext);
    if (context === undefined) {
        throw new Error(
            'useSharedState must be used within a Shared StateProvider',
        );
    }
    return context;
};
