import type { AppProps } from "next/app";
import ReduxToastrLib from "react-redux-toastr";
import "../app/styles/globals.scss";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import NextProgressBar from "nextjs-progressbar";
import AuthProvider from "@/providers/AuthProvider";
import { TypeComponentAuthFields } from "@/providers/private-route.inteface";

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<>
			<NextProgressBar
				color="#FF7652"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider Component={Component}>
						<Component {...pageProps} />
						<ReduxToastrLib
							newestOnTop={false}
							preventDuplicates
							progressBar
							closeOnToastrClick
							timeOut={4000}
							transitionIn={"fadeIn"}
							transitionOut={"fadeOut"}
						/>
					</AuthProvider>
				</PersistGate>
			</Provider>
		</>
	);
}

export default MyApp;
