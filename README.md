## "React native Squama"

![logo](https://user-images.githubusercontent.com/17039317/64926667-cc462d80-d808-11e9-9ba8-1001a4ac7a80.png)

UI toolkit

- Button
- ToggleButton
- ButtonGroup
- NumericStepper
- DatePicker
- DateRangePicker
- Header
- HeadingView
- Pop-up
- Alert
- Icon
- PinchZoomList [in progress]

# Features:

1. Customizable skins and styles
2. Package up related styles into reusable themes.

## Getting started

Creating custom theme:

```ts
export class CustomTheme extends Theme {

    public static alias = {
        button: ButtonThemeAlias,
        toggleButton: ToggleButtonThemeAlias,
        numericStepper: NumericStepperThemeAlias,
        calendar: CalendarThemeAlias,
        datePicker: DatePickerThemeAlias,
        header: HeaderThemeAlias,
        headingView: HeadingViewThemeAlias,
        overlay: OverlayThemeAlias,
        screen: ScreenThemeAlias
        // etc...
    }

    protected buildStyles() {
        this.buildButtonStyles();
        // etc...
    }

    private buildButtonStyles(): void {
        StyleProvider.default(Button, ButtonStyles.primary());
        StyleProvider.add(Button, ButtonThemeAlias.SECONDARY, ButtonStyles.secondary());
        
        // base states
        StyleProvider.default(ButtonState, ButtonStateStyles.primaryNormal());
        StyleProvider.add(ButtonState, ButtonStateThemeAlias.PRIMARY_DISABLED, ButtonStateStyles.primaryDisabled());
    }

    private buildScreenStyles(): void {
        StyleProvider.default(Screen, ScreenStyles.primary());
    }
}

```

## Credits

Developer - Eugene Grebennikov (@djonnyx)

## MIT License

Copyright (c) 2019 djonnyx <djonnyx@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
