package org.mid.ghazouliecom.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Category of product entity
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {

    @Id @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String photo;
    @OneToMany(mappedBy = "category")
    private Collection<Product> products;
}
