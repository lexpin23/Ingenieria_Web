package MVC;
import javax.swing.*;
import java.awt.*;

public class Vista extends JFrame
{
	JTextField txtImporte;
	JButton btnDolares, btnPesos, btnLimpiar;
	JLabel resultado;
	
	public Vista() {
		super("Convertidor de pesos a dólares");
		HazInterfaz();
	}
	
	private void HazInterfaz() {
		setSize(250,250);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLayout(new GridLayout(0,2));
		
		add(new JLabel("Importe: ", JLabel.RIGHT));
		add(txtImporte = new JTextField());
		add(btnDolares =  new JButton("Dolares"));
		add(btnPesos =  new JButton("Pesos"));
		add( new JLabel("Entregar: ", JLabel.RIGHT));
		add(resultado = new JLabel(""));
		
		setVisible(true);
	}
	
}
