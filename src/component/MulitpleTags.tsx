// @ts-nocheck
import React, { useState } from 'react';
import { Select, Tooltip } from 'antd';

const options = [];
for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({
        label: `Long Label: ${value}`,
        value,
    });
}
const sharedProps = {
    mode: 'multiple',
    style: {
        width: '100%',
    },
    options,
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
};

export default function MultipleTags() {
    const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
    const selectProps = {
        value,
        onChange: setValue,
    };;

    return (
        <Select
            {...sharedProps}
            {...selectProps}
            maxTagPlaceholder={(omittedValues) => (
                <Tooltip
                    styles={{
                        root: {
                            pointerEvents: 'none',
                        },
                    }}
                    title={omittedValues.map(({ label }) => label).join(', ')}
                >
                    <span>Hover Me</span>
                </Tooltip>
            )}
        />
    )
}