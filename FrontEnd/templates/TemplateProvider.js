import { createContext } from 'react';

import { createTheme , ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
const TemplateContext = createContext(null);
export const TemplateProvider = ({children}) => {
	const theme = createTheme ({
		overrides : {
			MuiDialog : {
				paperWidthSm : {
					maxWidth : 'unset'
				}
			},
      MuiDialogContent:{
        root:{
          '&:first-child':{
            paddingTop:0
          }
        }
      }
		}
	});

	return (
		<TemplateContext.Provider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
				<CssBaseline />
			</ThemeProvider>
		</TemplateContext.Provider>
	);
};
