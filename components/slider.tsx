import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import { useState } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  minPrice: number;
  maxPrice: number;
  onChange: (minValue: number, maxValue: number) => void;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  minPrice,
  maxPrice,
  onChange,
}) => {
  const [values, setValues] = useState<number[]>([minPrice, maxPrice]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
    onChange((newValue as number[])[0], (newValue as number[])[1]);
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [...values];
    newValues[index] = Number(event.target.value);
    setValues(newValues);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        className="text-green-600"
        min={min}
        max={max}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Input
          value={values[0]}
          margin="dense"
          onChange={handleInputChange(0)}
          inputProps={{ min: 0, max: 1000, type: 'number', 'aria-label': 'Minimum price' }}
        />
        <Input
          value={values[1]}
          margin="dense"
          onChange={handleInputChange(1)}
          inputProps={{ min: 0, max: 1000, type: 'number', 'aria-label': 'Maximum price' }}
        />
      </Box>
    </Box>
  );
};
