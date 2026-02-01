"use client";

import { useState } from "react";
import { Customization } from "../../lib/types";

interface CustomizationSuiteProps {
    customizations: Customization[];
    onSelect: (selections: Record<string, string>) => void;
}

export default function CustomizationSuite({
    customizations,
    onSelect,
}: CustomizationSuiteProps) {
    const [selections, setSelections] = useState<Record<string, string>>({});

    const handleSelect = (title: string, option: string) => {
        const newSelections = { ...selections, [title]: option };
        setSelections(newSelections);
        onSelect(newSelections);
    };

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Customize Your Dress</h3>
            {customizations.map((custom) => (
                <div key={custom._id} className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">
                        {custom.title}
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {custom.options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(custom.title, option)}
                                className={`px-4 py-2 rounded-full border text-sm transition-all ${selections[custom.title] === option
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-gray-700 border-gray-200 hover:border-black"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
