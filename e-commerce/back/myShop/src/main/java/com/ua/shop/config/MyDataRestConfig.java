package com.ua.shop.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.ua.shop.model.Product;
import com.ua.shop.model.ProductCategory;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		HttpMethod[] methodsToDisable = { HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.POST };

		config.getExposureConfiguration().forDomainType(Product.class)
				.withItemExposure((metdata, httpMethods) -> httpMethods.disable(methodsToDisable))
				.withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(methodsToDisable));

		config.getExposureConfiguration().forDomainType(ProductCategory.class)
				.withItemExposure((metdata, httpMethods) -> httpMethods.disable(methodsToDisable))
				.withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(methodsToDisable));
	}

}
