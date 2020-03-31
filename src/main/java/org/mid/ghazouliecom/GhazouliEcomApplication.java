package org.mid.ghazouliecom;

import net.bytebuddy.utility.RandomString;
import org.mid.ghazouliecom.entities.Category;
import org.mid.ghazouliecom.entities.Product;
import org.mid.ghazouliecom.repository.CategoryRepository;
import org.mid.ghazouliecom.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Random;

@SpringBootApplication
public class GhazouliEcomApplication implements CommandLineRunner {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(GhazouliEcomApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        repositoryRestConfiguration.exposeIdsFor(Product.class, Category.class);

        Random random = new Random();

        categoryRepository.save(new Category(null,"Computers",null,null,null));
        categoryRepository.save(new Category(null,"Ordinateurs",null,null,null));
        categoryRepository.save(new Category(null,"Clavier",null,null,null));
        categoryRepository.findAll().forEach(category -> {
            for (int i=0;i<10;i++) {

                Product product = new Product();
                product.setPrice(random.nextDouble());
                product.setAvailable(random.nextBoolean());
                product.setDescription("imprimante");
                product.setName(RandomString.make(20));
                product.setSelected(random.nextBoolean());
                product.setCategory(category);
                product.setPhotoName("unknown.jpeg");
                productRepository.save(product);
            }

        });



    }
}
