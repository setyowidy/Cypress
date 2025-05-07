describe('OrangeHRM Login Test', () => {
    it('should login successfully with valid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Tunggu elemen login muncul (dengan timeout tambahan agar stabil)
      cy.get('input[name="username"]', { timeout: 100000 }).should('be.visible').type('Admin');
      cy.get('input[name="password"]', {timeout: 10000}).should('be.visible').type('admin123');
  
      // Klik tombol login lagi
      cy.get('button[type="submit"]').click();
  
      // Verifikasi setelah login berhasil (dashboard muncul)
      cy.url().should('include', '/dashboard');
      cy.contains('Dashboard').should('be.visible');
    });
  });
  