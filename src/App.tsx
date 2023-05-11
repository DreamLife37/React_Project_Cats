import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Checkbox} from "./components/Checkbox";
import {Button} from "./components/Button";
import {SkeletonImage} from "./components/SkeletonImage";
import {Image} from "./components/Image";
import {Error} from "./components/Error";
import {blob} from "stream/consumers";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 460px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  height: 360px;
`;

const ErrorWrapper = styled.div`
  height: 20px;
`;

type ResponseDataType = {
    height: number,
    id: string,
    url: string,
    width: number
}

function App() {
    const [image, setImage] = useState<string>('');
    const [isEnabledApp, setIsEnabledApp] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;
        if (isEnabledApp && autoRefresh) intervalId = setInterval(() => getImage(), 5000);
        return () => clearInterval(intervalId);
    }, [isEnabledApp, autoRefresh]);

    const URL = 'https://api.thecatapi.com/v1/images/search'

    const getImage = async () => {
        setError('')
        setImage('')
        setIsLoading(true)
        try {
            const response = await fetch(URL)
            if (response.status === 200) {
                const data: ResponseDataType[] = await response.json()
                setImage(data[0].url)
            } else setError('Failed to load image')
        } catch (e) {
            setError('Failed to load image')
        }
    };

    const handleEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEnabledApp(event.target.checked);
    };

    const handleAutoRefresh = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAutoRefresh(event.target.checked);
    };

    const handleButtonClick = () => getImage();

    const handleErrorImage = () => {
        setIsLoading(false)
        setError('Failed to load image')
    }
    const handleSuccessImage = () => {
        setIsLoading(false)

    }


    return (
        <Container>
            <Checkbox onChange={handleEnable}
                      checked={isEnabledApp}
                      id={'enabled'}
                      title={'Enabled'}/>
            <Checkbox onChange={handleAutoRefresh}
                      checked={autoRefresh}
                      id={'auto-refresh'}
                      title={'Auto-refresh every 5 second'}
                      disabled={!isEnabledApp}/>
            <Button disabled={isLoading || !isEnabledApp}
                    title={'Get cat'}
                    onClick={handleButtonClick}/>
            <ErrorWrapper>
                {error && <Error error={error}/>}
            </ErrorWrapper>
            <ImageWrapper>
                {isLoading && <SkeletonImage display={isLoading ? 'block' : 'none'}
                                             isLoading={isLoading}/>}
                {image && <Image display={isLoading ? 'none' : 'block'}
                                 src={image} alt="Cat"
                                 onLoad={handleSuccessImage}
                                 onError={handleErrorImage}/>}
            </ImageWrapper>
        </Container>
    );
}

export default App;
