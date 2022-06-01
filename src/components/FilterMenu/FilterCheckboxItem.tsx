import React, { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import { useTranslation } from 'react-i18next';

interface FilterCheckboxItemProps {
  name: string;
  onChange: (value: boolean, name: string) => void;
  initialCheck: boolean;
  reset: boolean;
}

const FilterCheckboxItem: React.FC<FilterCheckboxItemProps> = ({
  onChange,
  name,
  initialCheck,
  reset,
}) => {
  const [checked, setChecked] = useState<boolean>(initialCheck);
  const { t } = useTranslation();

  useEffect(() => {
    if (reset) {
      setChecked(false);
    }
  }, [reset]);

  const handleCheck = () => {
    onChange(!checked, name);
    setChecked(!checked);
  };

  return (
    <div className="mb-2">
      <input
        type="checkbox"
        className="appearance-none border-gray-400 text-gold-100 focus:ring-gold-100 rounded"
        onChange={() => handleCheck()}
        checked={checked}
      />
      <span className="ml-2 text-sm">{t('filters.flavors.' + name)}</span>
    </div>
  );
};

export default FilterCheckboxItem;
