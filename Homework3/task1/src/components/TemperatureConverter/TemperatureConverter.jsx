import { useState } from 'react';
import { TextField, Box} from '@mui/material';
import style from './TemperatureConverter.module.sass';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);

        if (value === '') {
            setFahrenheit('');
            return;
        }

        const celsiusValue = parseFloat(value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
            setFahrenheit(fahrenheitValue.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);

        if (value === '') {
            setCelsius('');
            return;
        }

        const fahrenheitValue = parseFloat(value);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
            setCelsius(celsiusValue.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <Box className={style.control}>
            <TextField
                label="Celsius"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
                type="number"
                inputProps={{ step: "any" }}
                className={style.textField}
            />
            <TextField
                label="Fahrenheit"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                type="number"
                inputProps={{ step: "any" }}
                className={style.textField}
            />
        </Box>
    );
}

export default TemperatureConverter;