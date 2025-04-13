import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    // Set a timeout to ensure loading screen doesn't get stuck
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay before showing content to ensure smooth transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main 
        className={`main-body ${!isLoading ? 'main-active' : ''}`}
        style={{ 
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {children}
      </main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
