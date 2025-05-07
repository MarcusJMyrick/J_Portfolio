import React from 'react';

export const StyleContext = React.createContext();

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
